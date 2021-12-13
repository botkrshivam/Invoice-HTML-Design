window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("invoice");
            let body = document.body
            let html = document.documentElement

            var height = Math.max(body.scrollHeight, body.offsetHeight,
                html.clientHeight, html.scrollHeight, html.offsetHeight)
            console.log("html", height);

            //   let element = document.querySelector('#contentForm')
            let heightCM = height / 35.35
            html2pdf(invoice, {
                margin: 1,
                filename: 'export.pdf',
                html2canvas: { dpi: 192, letterRendering: true, useCors: true, logging: true },
                jsPDF: {
                    orientation: 'landscape',
                    unit: 'cm',
                    format: [heightCM, 60]
                },
            });
        });
}