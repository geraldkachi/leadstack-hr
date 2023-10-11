export const formatDateWithTime = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'UTC',
    };
    
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    
    // Convert "st", "nd", "rd", "th" for the day
    const day = date.getDate();
    const daySuffix = getDaySuffix(day);
    
    return formattedDate.replace('{day}', `${day}${daySuffix}`);
  };
  
  const getDaySuffix = (day: number): string => {
    if (day === 1 || day === 21 || day === 31) {
      return 'st';
    } else if (day === 2 || day === 22) {
      return 'nd';
    } else if (day === 3 || day === 23) {
      return 'rd';
    } else {
      return 'th';
    }
  };

  export const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
  
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  
    // Reformat the date to "18-05-2021" format
    const [day, month, year] = formattedDate.split('/');
    return `${day}-${month}-${year}`;
  };