<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Proyecto</th>
          <th>Tareas</th>
          <th>Avance</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(project, index) in projectStore.projectList" :key="project.id" class="hover">
          <th>{{ index + 1 }}</th>
          <td>{{ project.name }}</td>
          <td>{{ project.tasks.length }}</td>
          <td><progress class="progress progress-info w-56" value="0" max="100"></progress></td>
        </tr>
      </tbody>
    </table>
  </div>

  <input-modal
    :open="modalOpen"
    @close="modalOpen = false"
    @value="projectStore.addProject"
    placeholder="Ingrese el nombre del proyecto"
    title="Nuevo proyecto"
    sub-title="Dale un nombre único a tu proyecto"
  />

  <custom-modal :open="customModalOpen">
    <template #header>
      <h1 class="text-3xl">Titulo del modal</h1>
    </template>

    <template #body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat rerum error non
        minima, a necessitatibus fuga tempora dolor praesentium id voluptas corrupti velit obcaecati
        unde adipisci sed enim soluta.
      </p>
    </template>

    <template #footer>
      <div class="flex justify-end">
        <button @click="customModalOpen = false" class="btn mr-4">Cancelar</button>
        <button @click="customModalOpen = false" class="btn btn-primary">Aceeptar</button>
      </div>
    </template>
  </custom-modal>

  <fab-button @click="modalOpen = true"> <add-circle /> </fab-button>

  <fab-button @click="customModalOpen = true" position="bottom-left"> <modal-icon /> </fab-button>
</template>

<script setup lang="ts">
import CustomModal from '@/modules/common/components/CustomModal.vue';
import FabButton from '@/modules/common/components/FabButton.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
import ModalIcon from '@/modules/common/icons/ModalIcon.vue';
import { ref } from 'vue';
import { useProjectsStore } from '../store/projects.store';

const modalOpen = ref(false);
const customModalOpen = ref(false);

const projectStore = useProjectsStore();
</script>
