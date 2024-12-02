import { component$, useSignal } from "@builder.io/qwik";

interface TodoInputProps {
  onAdd$: (text: string) => void;
}

export default component$<TodoInputProps>(({ onAdd$ }) => {
  const inputValue = useSignal("");

  return (
    <div class="bg-white rounded-2xl shadow-lg p-4">
      <div class="flex gap-3">
        <input
          type="text"
          value={inputValue.value}
          onInput$={(e) =>
            (inputValue.value = (e.target as HTMLInputElement).value)
          }
          onKeyUp$={(e) => {
            if (e.key === "Enter" && inputValue.value.trim()) {
              onAdd$(inputValue.value.trim());
              inputValue.value = "";
            }
          }}
          placeholder="Task to be done..."
          class="flex-1 text-gray-600 text-lg placeholder-gray-400 outline-none"
        />
        <button
          onClick$={() => {
            if (inputValue.value.trim()) {
              onAdd$(inputValue.value.trim());
              inputValue.value = "";
            }
          }}
          class="bg-purple-500 text-white px-8 py-2 rounded-lg hover:bg-purple-600 transition-colors"
        >
          Add
        </button>
      </div>
    </div>
  );
});
