<script setup lang="ts">

import { ref } from "vue";
import { Api } from "@/util/serverCommunication";

const mediaRecorder = ref<MediaRecorder>();
const audioChunks = ref<Blob[]>([]);
const audioSrc = ref()
const recording = ref(false)
const messages = ref('')

function startRecording() {
  audioSrc.value = null
  if (recording.value) {
    stopRecording()
    return;
  }

  audioChunks.value = []

  navigator.mediaDevices.getUserMedia({audio: true})
      .then(stream => {
        mediaRecorder.value = new MediaRecorder(stream);
        mediaRecorder.value.ondataavailable = event => {
          audioChunks.value.push(event.data);
        };
        mediaRecorder.value.onstop = () => {
          const audioBlob = new Blob(audioChunks.value, {type: 'audio/wav'});
          const formData = new FormData();
          formData.append('audio', new Blob(audioChunks.value, {type: 'audio/ogg'}), 'recorded_audio.wav');

          Api.post('voice2text', formData).then(m => console.log(m))

          audioChunks.value = [];
          audioSrc.value = URL.createObjectURL(audioBlob);
        };
        mediaRecorder.value.start();
        recording.value = true;
      })
      .catch(error => {
        console.error('Error accessing microphone:', error);
      });
}

function stopRecording() {
  if (!mediaRecorder.value)
    return

  mediaRecorder.value.stop();
  recording.value = false;

  navigator.mediaDevices.getUserMedia({audio: true})
}

</script>

<template>
  <div class="flex justify-center h-screen w-full flex-wrap" style="background-color: #1d1e23">
    <audio autoplay v-if="audioSrc">
      <source :src="audioSrc" type="audio/wav">
      Your browser does not support the audio element.
    </audio>

    <div v-if="messages" class="bg-gray-200 w-full mx-32 mt-4 flex justify-center text-xs">
      {{messages}}
    </div>

    <div @click="startRecording()" class=" mt-12 h-12 cursor-pointer text-gray-100 w-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-black justify-center flex items-center hover:from-blue-500 hover:to-blue-600 hover:text-gray-200">
      <i :class="recording ? 'animate-pulse text-red-700' : ''" class="fa fa-microphone"></i>
    </div>
  </div>
</template>
