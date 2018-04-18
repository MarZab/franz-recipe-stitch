module.exports = (Franz) => {
  const getMessages = () => {
    const mentionMessages = document.querySelector(`.switcher__badge.mentions`);
    const unreadMessages = document.querySelector(`.switcher__badge.unreads`);
    if (mentionMessages) {
      Franz.setBadge(parseInt(mentionMessages.textContent), 0);
    } else if (unreadMessages) {
      Franz.setBadge(0, 1);
    } else {
      Franz.setBadge(0, 0);
    }
  };
  Franz.loop(getMessages);
};
