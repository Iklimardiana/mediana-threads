export default function formatDate(date) {
  const now = new Date();
  const posted = new Date(date);
  const diffInSeconds = Math.floor((now - posted) / 1000);

  switch (true) {
    case diffInSeconds >= 60 * 60 * 24 * 365:
      const diffYears = Math.floor(diffInSeconds / (60 * 60 * 24 * 365));
      return `${diffYears} year${diffYears > 1 ? 's' : ''} ago`;
    case diffInSeconds >= 60 * 60 * 24:
      const diffDays = Math.floor(diffInSeconds / (60 * 60 * 24));
      return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    case diffInSeconds >= 60 * 60:
      const diffHours = Math.floor(diffInSeconds / (60 * 60));
      return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    case diffInSeconds >= 60:
      const diffMinutes = Math.floor(diffInSeconds / 60);
      return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
    case diffInSeconds > 0:
      return `${diffInSeconds} second${diffInSeconds > 1 ? 's' : ''} ago`;
    default:
      return 'recently';
  }
}
