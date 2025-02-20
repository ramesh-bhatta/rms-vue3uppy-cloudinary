<script setup>
import { ref, onMounted, computed } from 'vue';
import UppyCloudinaryUploader from './components/UppyCloudinaryUploader.vue';
import config from './config';

const uploaderConfig = computed(() => config.cloudinary);


const onUploadSuccess = (result) => {
  console.log('File uploaded:', result);
  if (result.failed.length > 0) {
    console.error('Errors:');
    result.failed.forEach((file) => {
      console.error(file.error);
    });
  }
};
</script>

<template>
  <UppyCloudinaryUploader :cloudName="uploaderConfig.cloudName" :preset="uploaderConfig.preset"
    :tags="uploaderConfig.tags" :maxFileSize="uploaderConfig.maxFileSize"
    :maxNumberOfFiles="uploaderConfig.maxNumberOfFiles" :allowedFileTypes="uploaderConfig.allowedFileTypes"
    :closeModalOnClickOutside="uploaderConfig.closeModalOnClickOutside"
    :closeAfterFinish="uploaderConfig.closeAfterFinish" :autoProceed="uploaderConfig.autoProceed"
    :proudlyDisplayPoweredByUppy="uploaderConfig.showPoweredBy" :buttonText="'Upload Adgroup Images'"
    :theme="uploaderConfig.theme" :allowedMetaFields="uploaderConfig.allowedMetaFields" :inline="uploaderConfig.inline"
    @uploaded="onUploadSuccess">
    <!-- <template v-slot:btn-icon>
        <b-icon icon="cloud-upload-alt"
        size="is-medium"></b-icon>
      </template> -->
  </UppyCloudinaryUploader>
</template>


<style>
[data-uppy-theme=dark] .uppy-Dashboard-inner {
  background-color: #a03333;
}
</style>
