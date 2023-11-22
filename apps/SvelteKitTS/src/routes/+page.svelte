<script lang="ts">
  // http://127.0.0.1:5173/imported

  import { onMount } from "svelte";
  import {
    loadedTypia,
    exampleMember,
    exampleNotMember,
    validateMember,
  } from "./local-typia";
  // None of these are working

  // let messageLoaded = "Not loaded";
  
  // import { log, messageLoaded } from "../../../../packages/common/log";
  // import { log, messageLoaded } from "../../../../packages/common/log.ts";
  // import { log, messageLoaded } from "common/log.ts";
  import { log, messageLoaded } from "common/log";

  // Same error
  // import { messageLoadedLocalWithImport } from "./local-ts-with-ts-import";
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
<!-- <br />
{messageLoadedLocalWithImport} -->
<br />
{messageLoaded}
<br />
{loadedTypia}
