
export const IconOne = (props) => {
    return (
        <svg width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M21 0C9.4 0 0 9.4 0 21C0 32.6 9.4 42 21 42C32.6 42 42 32.6 42 21C42 9.4 32.6 0 21 0Z" fill="url(#paint0_linear)" />
        <path d="M9.5 23.4V28.4C9.5 28.6 9.6 28.9 9.8 29L14.2 31.5V26.1L9.5 23.4Z" fill="white" />
        <path d="M15.6 26.1V31.5L20.3 28.8V23.4L15.6 26.1Z" fill="white" />
        <path d="M21.7 23.4V28.8L26.4 31.5V26.1L21.7 23.4Z" fill="white" />
        <path d="M27.7 26.1V31.5L32.1 29C32.3 28.9 32.4 28.7 32.4 28.4V23.4L27.7 26.1Z" fill="white" />
        <path d="M27.1 19.3L21.9 21.9L27.1 24.9L32.3 21.9L27.1 19.3Z" fill="white" />
        <path d="M21.3 8.59999C21.1 8.49999 20.9 8.49999 20.7 8.59999L15.8 11.1L21 14.1L26.2 11.1L21.3 8.59999Z" fill="white" />
        <path d="M15.6 12.5V18.2L20.3 20.5V15.2L15.6 12.5Z" fill="white" />
        <path d="M14.9 19.3L9.7 21.9L14.9 24.9L20.1 21.9L14.9 19.3Z" fill="white" />
        <path d="M21.7 15.2V20.5L26.4 18.2V12.5L21.7 15.2Z" fill="white" />
        <defs>
          <linearGradient id="paint0_linear" x1="10.502" y1="2.8169" x2="31.498" y2="39.1831" gradientUnits="userSpaceOnUse">
            <stop offset="0.0658689" stopColor="#1DE6FB" />
            <stop offset="0.9958" stopColor="#0DA7ED" />
            <stop offset="0.9981" stopColor="#0AA9FA" />
          </linearGradient>
        </defs>
      </svg>
    )
}

export const ArrowIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
</svg>
  )
}


export const SSLIcon = (props) => {
  return (
    <svg className="p-checkout-sidebar-protection-icon a-icon--payment a-icon" height="1.1875em" viewBox="0 0 19 19" width="1.1875em" {...props}>
      <use href="/static/media/payment-icons.fe23bcd8dbb4f4b423ac85de8016c7f9.svg#payment-SSL" xlinkHref="/static/media/payment-icons.fe23bcd8dbb4f4b423ac85de8016c7f9.svg#payment-SSL" /></svg>
  )
}

export const CheckIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
  )
}

export const CancelIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
  )
}

