<script lang="ts">
  // http://127.0.0.1:5173/imported

  import { onMount } from "svelte";
  import {
    loadedTypia,
    exampleMember,
    exampleNotMember,
    validateMember,
  } from "./local-typia";
  import { log, messageLoaded } from "common/log";
  import { messageLoadedLocal } from "./local-ts";

  onMount(() => {
    log("Page mounted");

    validateMember(exampleMember);
    validateMember(exampleNotMember);
  });
</script>

<h1>Page</h1>
<p>Check console for typia validations</p>
<br />
{messageLoadedLocal}
<br />
{messageLoaded}
<br />
{loadedTypia}
