     
     const btnGenerate = document.querySelector("#generate-pdf");
     
     btnGenerate.addEventListener("click", () => {
       // conteúdo do pdf
       const content = document.querySelector("#content")
       // configurações do arquivo final 
       const options = {
         margin: [10, 10, 10, 10],
         filename: "lista.pdf",
         html2canvas: {scale: 2},
         jsPDF: {unit: "mm", format: "a4", orientation: "portrait"}
       }
       
       // Gerar e baixar pdf
       html2pdf().set(options).from(content).save();
     });