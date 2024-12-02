import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import TodoInput from "~/components/todo/todo-input";
import TodoItem from "~/components/todo/todo-item";
import type { Todo } from "~/components/todo/types";

export default component$(() => {
  const state = useStore({
    todos: [] as Todo[],
  });

  useVisibleTask$(() => {
    const stored = localStorage.getItem("todos");
    if (stored) {
      state.todos = JSON.parse(stored);
    }
  });

  useVisibleTask$(({ track }) => {
    track(() => state.todos);
    localStorage.setItem("todos", JSON.stringify(state.todos));
  });

  return (
    <div class="min-h-screen bg-gradient-to-br from-purple-500 to-purple-600 py-12 px-4">
      <div class="max-w-[600px] mx-auto space-y-6">
        {/* TODO: Add TODO Input */}

        {state.todos.length > 0 && (
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div class="divide-y divide-gray-100">
              {state.todos.map((todo) => ({
                /* TODO: Add TODO Item */
              }))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Todo App",
  meta: [
    {
      name: "Qwik Todo App",
      content: "A simple Todo application built with Qwik",
    },
  ],
};
