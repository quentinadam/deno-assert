const jsrVersion = JSON.parse(Deno.readTextFileSync('deno.json')).version;
const npmVersion = JSON.parse(Deno.readTextFileSync('package.json')).version;
if (jsrVersion !== npmVersion) {
  console.error(`Version mismatch in deno.json (${jsrVersion}) and package.json (${npmVersion})`);
  Deno.exit(1);
} else {
  console.log('Version numbers match');
}
