<script setup>
import { onBeforeUnmount, onMounted } from 'vue';
import Uppy from '@uppy/core';
import Dashboard from '@uppy/dashboard';
import XHRUpload from '@uppy/xhr-upload';
// Don't forget the CSS: core and UI components + plugins you are using
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';


// Define props
const props = defineProps({
  uppyInstanceId: { type: String, default: "uppy" }, // Uppy Instance ID
  cloudName: { type: String, required: true }, // Cloudinary Cloud Name
  preset: { type: String, required: true }, // Upload Preset
  tags: { type: Array, default: () => [] }, // File Tags
  btnTriggerClass: { type: String, default: "uppy-trigger" }, // Button Trigger Class
  buttonText: { type: String, default: "Upload Files" }, // Button Text
  buttonClass: { type: String, default: "btn" }, // Custom Button Class
  maxFileSize: { type: Number, default: 4 * 1024 * 1024 }, // Max File Size (4MB default)
  maxNumberOfFiles: { type: Number, default: 20 }, // Max number of files
  minNumberOfFiles: { type: Number, default: 1 }, // Min number of files
  allowedFileTypes: { type: Array, default: () => ["image/png", "image/jpeg"] }, // Allowed File Types
  closeModalOnClickOutside: { type: Boolean, default: true }, // Close Modal on Click Outside
  closeAfterFinish: { type: Boolean, default: true }, // Close Modal After Upload
  note: { type: String, default: "" }, // Note to Users
  autoProceed: { type: Boolean, default: false }, // Auto Upload or Not
  theme: { type: String, default: "light" }, // Dashboard Theme
  debug: { type: Boolean, default: false }, // Debug Mode
  inline: { type: Boolean, default: false }, // Inline Mode
  showProgressDetails: { type: Boolean, default: false }, // Show Progress Details
  proudlyDisplayPoweredByUppy: { type: Boolean, default: false }, // Show Powered By Uppy
  allowedMetaFieldsArr: { type: Array, default: () => ["file", "name", "upload_preset", "tags"] }, // Allowed File Types
});

const emit = defineEmits(['uploaded']);


let uppy = null;
onMounted(() => {
  uppy = new Uppy({
    id: props.uppyInstanceId,
    autoProceed: props.autoProceed,
    debug: props.debug,
    meta: {
      upload_preset: props.preset,
      tags: props.tags
    },
    restrictions: {
      maxFileSize: props.maxFileSize,
      maxNumberOfFiles: props.maxNumberOfFiles,
      minNumberOfFiles: props.minNumberOfFiles,
      allowedFileTypes: props.allowedFileTypes,
    },
  });
  uppy.use(Dashboard, {
    inline: props.inline,
    trigger: `.${props.btnTriggerClass}`,
    showProgressDetails: props.showProgressDetails,
    proudlyDisplayPoweredByUppy: props.proudlyDisplayPoweredByUppy,
    closeModalOnClickOutside: props.closeModalOnClickOutside,
    closeAfterFinish: props.closeAfterFinish,
    note: props.note,
    theme: props.theme,
  });

  // XHR Upload for Cloudinary
  uppy.use(XHRUpload, {
    endpoint: `https://api.cloudinary.com/v1_1/${props.cloudName}/image/upload`,
    fieldName: "file",
    formData: true,
    allowedMetaFields: ["upload_preset", "tags"],
  });


  // events listener
  uppy.on("file-added", file => {
    console.log("FILE ADDED ON DASHBOARD", file);
    this.uppy.setFileMeta(file.id, {
      file: file.data,
      upload_preset: props.preset,
      tags: props.tags
    });
  });

  // Listen for successful uploads
  uppy.on('complete', (result) => {
    console.log("Upload Complete: ", result.successful);
    emit('uploaded', result); // emit event along with upload response
  });

});

// onBeforeUnmount(() => {
//   uppy.close();
// });

</script>

<template>
  <button :class="`${btnTriggerClass} ${buttonClass}`">
    <slot name="btn-icon"></slot>
    {{ buttonText }}
  </button>
</template>
