function formatDate(date) {
  const now = new Date();
  const posted = new Date(date);
  const diff = now - posted;
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diff / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diff / (1000 * 60));
  const diffSeconds = Math.floor(diff / 1000);

  switch (true) {
    case diffDays > 0:
      return `${diffDays} days ago`;
    case diffHours > 0:
      return `${diffHours} hours ago`;
    case diffMinutes > 0:
      return `${diffMinutes} minutes ago`;
    case diffSeconds > 0:
      return `${diffSeconds} seconds ago`;
    default:
      return 'recently';
  }
}

export default formatDate;
