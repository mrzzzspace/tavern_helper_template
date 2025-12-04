const Settings = z
  .object({
    button_selected: z.boolean().default(false),
  })
  .prefault({});

export const useSettingsStore = defineStore('settings', () => {
  const settings = ref(Settings.parse(getVariables({ type: 'script', script_id: getScriptId() })));

<<<<<<< HEAD
  watch(
    settings,
    new_settings => {
      insertOrAssignVariables(klona(new_settings), { type: 'script', script_id: getScriptId() });
    },
    { immediate: true, deep: true },
  );
  return {
    settings,
  };
=======
  watchEffect(() => {
    insertOrAssignVariables(klona(settings.value), { type: 'script', script_id: getScriptId() });
  });

  return { settings };
>>>>>>> 0d88fdf4db0fdb908f1712ebc405ba065512054b
});
