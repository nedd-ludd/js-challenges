function frame(string) {
  const mainLine = "* " + string + " *";
  return (
    "*".repeat(mainLine.length) +
    "\n" +
    mainLine +
    "\n" +
    "*".repeat(mainLine.length)
  );
  return;
}

console.log(frame("Rumplestiltskin"));
