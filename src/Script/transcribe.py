import os
# import openai
import sys
import whisper
from datetime import timedelta
from googletrans import Translator

def transcribe_audio(path, language):
    model = whisper.load_model("base") # Change this to your desired model
    print("Whisper model loaded.")
    transcribe = model.transcribe(audio=path)
    segments = transcribe['segments']

    for segment in segments:
        
        startTime = str(0)+str(timedelta(seconds=int(segment['start'])))+',000'
        endTime = str(0)+str(timedelta(seconds=int(segment['end'])))+',000'
        text = segment['text']
        segmentId = segment['id']+1
        segment = f"{segmentId}\n{startTime} --> {endTime}\n{text[1:] if text[0] is ' ' else text}\n"
        translator = Translator()

        print(segment)
        if (len(text) > 0 and language != 'none'):
            translation = translator.translate(text, dest=language)
            print(f"{translation.text}\n\n")

        # Specify the directory path and file name
        directory_path = 'SrtFiles'
        file_name = 'VIDEO_FILENAME.srt'
        srt_filename = os.path.join(directory_path, file_name)

        # Create the directory if it doesn't exist
        if not os.path.exists(directory_path):
            os.makedirs(directory_path)

        # Write the segment to the SRT file
        with open(srt_filename, 'w', encoding='utf-8') as srt_file:
            srt_file.write(segment)

    return srt_filename

video_id = sys.argv[1]
language = sys.argv[2]

audio_file_path = os.path.join(os.getcwd(), 'tmp', video_id + '.m4a')

if __name__ == "__main__":
    transcribe_audio(audio_file_path, language)