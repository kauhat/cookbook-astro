<template>
  <div
    class="recipe-preview card card-bordered card-compact border-base-300 bg-base-100 shadow-sm"
  >
    <div class="card-body prose prose-sm">
      <h3 class="title font-display text-2xl font-light">
        {{ title }}
      </h3>

      <div>
        <span v-if="servings" class="badge badge-neutral">
          Servings: {{ servings }}
        </span>
        <span v-if="time" class="badge badge-neutral"> Time: {{ time }} </span>
      </div>

      <div class="card-actions justify-end">
        <a :href="url" class="btn btn-outline btn-primary btn-sm">Read more</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { defineComponent } from "vue";
import type { CollectionEntry } from "astro:content";

export default defineComponent({
  props: {
    recipe: Object as PropType<CollectionEntry<"recipes">>,
  },
  setup({ recipe }) {
    const { title: recipeTitle, servings, time } = recipe?.data;
    const url = `/recipes/${recipe?.slug}`;
    const title = recipeTitle ?? recipe?.id;

    return {
      url,
      title,
      servings,
      time,
    };
  },
});
</script>
