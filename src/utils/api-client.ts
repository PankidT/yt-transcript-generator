export function extractVideoIdFromUrl(url: string) {
  return new URL(url).searchParams.get("v");
}

type ProgressCallback = (output: string) => void;

export async function processVideo(
  videoId: string,
  targetLanguage: string,
  targetModel: string,
  callback: ProgressCallback
): Promise<false | string> {
  callback("Downloading audio...\n");
  await downloadAudio(videoId, callback);

  callback("\nTranscribing audio. It takes a while...\n");
  const srt = await transcribe(videoId, targetLanguage, targetModel, callback);

  return srt;
}

// passed
export async function downloadAudio(
  videoId: string,
  onProgress: ProgressCallback
) {
  const res = await fetch(
    `/api/audioApi?${new URLSearchParams({ videoId: videoId })}`,
    {}
  );
  const reader = res.body?.getReader();

  if (reader) {
    return streamResponse(reader, onProgress);
  } else {
    return false;
  }
}

// in problem
export async function transcribe(
  videoId: string,
  targetLanguage: string,
  targetModel: string,
  onProgress: ProgressCallback
): Promise<string | false> {
  // const res = await fetch(
  //   `/api/transcribe?${new URLSearchParams({ videoId: videoId })}`,
  //   {}
  // );

  const params = new URLSearchParams();
  params.append("videoId", videoId);
  params.append("language", targetLanguage);
  params.append("model", targetModel);

  const res = await fetch(`/api/transcribe?${params.toString()}`, {});

  const reader = res.body?.getReader();

  if (reader) {
    return streamResponse(reader, onProgress);
  } else {
    return false;
  }
}

async function streamResponse(
  reader: ReadableStreamDefaultReader<Uint8Array>,
  onProgress: ProgressCallback
): Promise<string> {
  return await new Promise((resolve) => {
    const decoder = new TextDecoder();
    let result = "";
    const readChunk = ({
      done,
      value,
    }: ReadableStreamReadResult<Uint8Array>) => {
      if (done) {
        resolve(result);
        return;
      }

      const output = decoder.decode(value);
      result += output;
      onProgress(output);
      reader.read().then(readChunk);
    };

    reader.read().then(readChunk);
  });
}
