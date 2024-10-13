import { response } from "express";
import { Readable } from "node:stream";

class OneToHundreadStream extends Readable {
  // esa é uma stream de leitura

  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 5) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(i));

        this.push(buf);
      }
    }, 1000);
  }
}

fetch('http://localhost:3334', {
  method:'POST',
  body:new OneToHundreadStream(),
  duplex:'half'//nessecario ao usar streams no como corpo 
}).then( response => { //enviar dados completos
  return response.text()
}).then(data => {
  console.log(data)
})
