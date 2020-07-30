$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="messagebox">
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
      `<div class="messagebox">
        <div class="message__info">
          <div class="message__info--UserName">
            ${message.user_name}
          </div>
          <div class="message__info--date">
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
      $('.messagefield').append(html);      
      $('Form')[0].reset();
      $('.messagefield').animate({ scrollTop: $('.messagefield')[0].scrollHeight});
      $('.submit-btn').attr('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
    return false;
  });
});