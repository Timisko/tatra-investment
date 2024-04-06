from gtts import gTTS   
import sys
  
text = sys.argv[1]
  
language = 'sk'
  
myobj = gTTS(text=text, lang=language, slow=False) 
  
myobj.save("voice.mp3") 