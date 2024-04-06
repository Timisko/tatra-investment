import speech_recognition as sr
from pydub import AudioSegment
import os

r = sr.Recognizer()

audio = AudioSegment.from_ogg('./tmp/voice.ogg')
audio.export('voice.wav', format='wav')

audio_file = sr.AudioFile('voice.wav')

with audio_file as source:
    audio = r.record(source)

try:
    text = r.recognize_google(audio, language="sk-SK")
    print(text)
except Exception as e:
    print("Error:", e)

os.remove('voice.wav')