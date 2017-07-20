require('../style/invitation.scss')

var $users = document.getElementsByName('users')
var $inviteButton = document.getElementById('invite')
var $main = document.getElementsByTagName('main')[0]
var $eMail = document.getElementById('e-mail')

function refreshInviteButtonStatus () {
  var $selectedUsers = document.querySelectorAll('input[name="users"]:checked');
  var isDisableInvite = !($selectedUsers.length || $eMail.value)

  $inviteButton.disabled = isDisableInvite;
  $inviteButton.className = isDisableInvite ? 'disabled' : '';
}

function calcAvailableNumber () {
  var $selectedUsers = document.querySelectorAll('input[name="users"]:checked');
  var $availableNumberBox = document.getElementById('availableNumber')

  $availableNumberBox.innerText = $users.length - $selectedUsers.length
  refreshInviteButtonStatus()
}

$main.addEventListener('click', function(evt) {
  if(evt.target.type !== 'checkbox') return

  calcAvailableNumber()
})

$eMail.addEventListener('keyup', function() {
  refreshInviteButtonStatus()
})

$inviteButton.addEventListener('click', function() {
  var checkedValue = '';

  $users.forEach(function (item) {
    if(item.checked) checkedValue += item.value + ' '
  })

  alert(checkedValue + $eMail.value + ' has invited.')
})

calcAvailableNumber()
