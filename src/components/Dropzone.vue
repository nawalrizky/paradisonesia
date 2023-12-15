<template>
  <div>
    <div v-bind="getRootProps()">
      <input v-bind="getInputProps()" />
      <p v-if="isDragActive">Drop the files here ...</p>
     
    </div>
    <button class="w-full h-full border" @click="open">Upload File</button>
  </div>
</template>

<script>
import { useDropzone } from "vue3-dropzone";

export default {
  name: "UseDropzoneDemo",
  props: {
    modelValue: String, // Declare the prop for v-model binding
  },
  emits: ["update:modelValue"],

  setup(props, { emit }) {
    function onDrop(acceptFiles, rejectReasons) {
      // Here you can implement the logic to upload the file to the server
      // Use your preferred method, like sending it via form or using an API

      // After successful upload, update the parent component's thumbnail value
      const uploadedFile = acceptFiles[0]; // Assuming you only handle one file
      emit("update:modelValue", uploadedFile.url); // Update the parent's thumbnail value
    }

    const { getRootProps, getInputProps, ...rest } = useDropzone({ onDrop });

    return {
      getRootProps,
      getInputProps,
      ...rest,
    };
  },
};
</script>
