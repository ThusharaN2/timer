const args = process.argv.slice(2);
if (args === isNaN) {
  console.log("NaN");
}
if (args <= 0) {
  console.log("Not a positive number");
} else {
  args.forEach((time) => {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  });
}

//node timer1.js 10 3 5 15 9
