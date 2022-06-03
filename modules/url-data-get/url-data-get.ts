try {
  const res = await fetch('https://www.example.com/');
  console.log('res', res);
  console.log('res.text()', await res.text());
  // const body = new Uint8Array(await res.arrayBuffer());
  // await Deno.stdout.write(body);
  // const body = res.body;
  // console.log('body.toLocaleString()', body.toLocaleString());
} catch(error) {
  console.log('error 발생!');
  console.log('error.name', error.name); // ex) PermissionDenied
  console.log('error.stack', error.stack);
}
