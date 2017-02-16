import $ from 'jquery';
import Pug from 'pug';
import Cssbeautify from 'cssbeautify';

$("#convert").on("click", () => {
    const input = $("#input").val();
    const html = Pug.render(input, {pretty: false});

    console.log(html);
    const css = extractCSS.extract(html, {
        extractIds: document.getElementById('extract_ids').checked,
        extractClasses: document.getElementById('extract_classes').checked,
        extractStyle: true,
        extractAnonStyle: true
    });

    $("#output").val(Cssbeautify(css));
    console.log(output);

})
