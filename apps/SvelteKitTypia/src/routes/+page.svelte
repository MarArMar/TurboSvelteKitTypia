<script lang="ts">
  import { onMount } from "svelte";
  import {
    loadedTypia,
    exampleMember,
    exampleNotMember,
    validateMember,
  } from "./typia";
  import { log, messageLoaded } from "common/lib/log-ts";
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
