export default function Login() {
    return(
        <div>Login Page</div>
    )
}


// Optional: Disable layout for this page
Login.getLayout = function getLayout(page: React.ReactNode) {
    return page; // Return the page directly without wrapping in RootLayout
  };