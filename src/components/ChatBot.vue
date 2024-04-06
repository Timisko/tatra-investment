<script setup lang="ts">

import { ref, watch } from "vue";
import { Api } from "@/util/serverCommunication";

const mediaRecorder = ref<MediaRecorder>();
const audioChunks = ref<Blob[]>([]);
const audioSrc = ref()
const recording = ref(false)

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

          Api.postAudio('voice2text', formData).then(m => console.log(m))

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


const is_open = ref(false)
const message = ref()
function openChat() {
  is_open.value = !is_open.value
}

const messages = ref()
Api.get('messages').then(m => messages.value = m.messages)

function sendMessage(event: KeyboardEvent) {
  if (event.key === "Enter") {
    Api.post('add_message', {text: message.value})
        .then(() => {})

    message.value = ""
    Api.get('messages').then(m => messages.value = m.messages)

    // TODO fix later
    const element = document.getElementById('msgs')
    element.scrollTop = 99999999999999;
  }
}

</script>

<template>
<div>
  <div v-if="is_open" class="rounded bg-gradient-to-b from-gray-200 to-gray-300 pb-px">
<!--    <audio autoplay v-if="audioSrc">-->
<!--      <source :src="audioSrc" type="audio/wav">-->
<!--      Your browser does not support the audio element.-->
<!--    </audio>-->

    <div class="px-2 py-1 text-gray-200 rounded-t flex justify-between select-none" style="background-color: #0d0d0d">
      <div>ChatBot</div>
      <div @click="openChat" class="hover:text-sky-600 cursor-pointer"><i class="fa fa-times"></i></div>
    </div>

    <div class="h-48 overflow-y-auto text-xs" id="msgs">
      <div v-for="message of messages" class="flex px-2 py-1" :class="message.bot ? 'justify-end' : 'justify-start'">
        <div class="bg-white p-1 rounded max-w-40">{{message.text}}</div>
      </div>
    </div>

    <div class="flex border border-blue-500 m-1 rounded-xl bg-white">
      <input v-model="message" @keyup="sendMessage" class="appearance-none rounded-l-2xl outline-none px-2 text-xs" @scrollend="true">
      <div @click="startRecording()" class="h-6 w-6 cursor-pointer text-gray-100 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-black justify-center flex items-center hover:from-blue-500 hover:to-blue-600 hover:text-gray-200">
        <i :class="recording ? 'animate-pulse text-red-700' : ''" class="fa fa-microphone"></i>
      </div>
    </div>
  </div>

  <div v-if="!is_open" @click="openChat" class="h-12 cursor-pointer text-gray-100 w-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-black justify-center flex items-center hover:from-blue-500 hover:to-blue-600 hover:text-gray-200">
    <i class="fa fa-comment text-xl"></i>
  </div>
</div>
</template>