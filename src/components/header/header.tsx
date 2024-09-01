import logo from "../../assets/logo.jpg"

type HeaderProps = {
    onButtonClick: () => void
}

export default function Header({ onButtonClick }: HeaderProps) {
    return (
        <>
            <img src={logo} alt="MoySklad Logo"></img>
            <button
                type="button"
                className="add-data-button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={onButtonClick}
            >
                <svg
                    className="add-data-icon"
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.8 0.599976C1.37565 0.599976 0.968684 0.768546 0.668626 1.0686C0.368568 1.36866 0.199997 1.77563 0.199997 2.19998V11.8C0.199997 12.2243 0.368568 12.6313 0.668626 12.9313C0.968684 13.2314 1.37565 13.4 1.8 13.4H8.2C8.62434 13.4 9.03131 13.2314 9.33137 12.9313C9.63143 12.6313 9.8 12.2243 9.8 11.8V4.93118C9.79991 4.50686 9.63128 4.09996 9.3312 3.79998L6.6 1.06878C6.30001 0.768697 5.89311 0.600066 5.4688 0.599976H1.8ZM5.8 5.39998C5.8 5.1878 5.71571 4.98432 5.56568 4.83429C5.41565 4.68426 5.21217 4.59998 5 4.59998C4.78782 4.59998 4.58434 4.68426 4.43431 4.83429C4.28428 4.98432 4.2 5.1878 4.2 5.39998V6.99998H2.6C2.38782 6.99998 2.18434 7.08426 2.03431 7.23429C1.88428 7.38432 1.8 7.5878 1.8 7.79998C1.8 8.01215 1.88428 8.21563 2.03431 8.36566C2.18434 8.51569 2.38782 8.59998 2.6 8.59998H4.2V10.2C4.2 10.4121 4.28428 10.6156 4.43431 10.7657C4.58434 10.9157 4.78782 11 5 11C5.21217 11 5.41565 10.9157 5.56568 10.7657C5.71571 10.6156 5.8 10.4121 5.8 10.2V8.59998H7.4C7.61217 8.59998 7.81565 8.51569 7.96568 8.36566C8.11571 8.21563 8.2 8.01215 8.2 7.79998C8.2 7.5878 8.11571 7.38432 7.96568 7.23429C7.81565 7.08426 7.61217 6.99998 7.4 6.99998H5.8V5.39998Z"
                        fill="white"
                    />
                </svg>
                Добавить
            </button>
        </>
    )
}
