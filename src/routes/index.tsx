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
        <TodoInput
          onAdd$={(text: string) => {
            state.todos = [
              ...state.todos,
              {
                id: crypto.randomUUID(),
                text,
                completed: false,
              },
            ];
          }}
        />

        {state.todos.length > 0 && (
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div class="divide-y divide-gray-100">
              {state.todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onDelete$={() => {
                    state.todos = state.todos.filter((t) => t.id !== todo.id);
                  }}
                  onToggle$={() => {
                    state.todos = state.todos.map((t) =>
                      t.id === todo.id ? { ...t, completed: !t.completed } : t
                    );
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik Todo App",
  meta: [
    {
      name: "Qwik Todo",
      content: "A modern Todo application built with Qwik",
    },
  ],
};
