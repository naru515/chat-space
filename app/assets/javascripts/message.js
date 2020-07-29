$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="messageBox">
          <div class="message__info">
            <div class="message__info--UserName">
              ${message.user_name}
            </div>
            <div class="message__info--date>
              ${message.created_at}
            </div>
          </div>
          <div class="message>
            <p class="message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${Message__image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="messageBox">
        <div class="message__info">
          <div class="message__info--UserName">
            ${message.user_name}
          </div>
          <div class="MessageInfo__date">
            ${message.created_at}
          </div>
        </div>
        <div class="message">
          <p class="message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.messageField').append(html);      
      $('form')[0].reset();
      $('.messageField').animate({ scrollTop: $('.messageField')[0].scrollHeight});
    })
  });
});