import { useContext, useState } from "react"
import { ContrAgent } from "../../domain/contrAgent"
import { isValidInn, isValidKpp } from "../../utils/contrAgentValidation"
import { v4 as uuidv4 } from "uuid"
import "./modal.css"
import useContrAgentContext from "../../contexts/contr_agent/contrAgentContext"
import { AnyObject, Field, Form } from "react-final-form"

type FormValues = {
    name: string
    inn: string
    address: string
    kpp: string
}

export default function ContrAgentEditModal() {
    const { contrAgentToEdit, saveContrAgent, closeEditModal } = useContrAgentContext()

    const validate = (values: FormValues): { [key in keyof FormValues]?: string } => {
        const errors: { [key in keyof FormValues]?: string } = {}
        if (!values.name) {
            errors.name = "Наименование не может быть пустым"
        }
        if (!isValidInn(values.inn)) {
            errors.inn = "Неверный формат ИНН"
        }
        if (!values.address) {
            errors.address = "Адрес не может быть пустым"
        }
        if (!isValidKpp(values.kpp)) {
            errors.kpp = "Неверный формат КПП"
        }
        return errors
    }

    const submit = async (values: FormValues) => {
        const contrAgent = {
            id: contrAgentToEdit.id || undefined,
            name: values.name,
            inn: values.inn,
            address: values.address,
            kpp: values.kpp,
        }
        await saveContrAgent(contrAgent)
        closeEditModal()
    }

    return (
        <div className="contragents-modal">
            <div className="overlay"></div>
            <div
                data-testid="contr-agent-edit-modal-test"
                aria-hidden="true"
                className="contragents-modal overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="contragents-modal-header flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <button
                                type="button"
                                className="close-modal end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="contragents-modal"
                                onClick={closeEditModal}
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Закрыть</span>
                            </button>
                        </div>
                        <div className="contragents-modal-body p-4 md:p-5">
                            <Form<FormValues>
                                initialValues={contrAgentToEdit || { name: "", inn: "", address: "", kpp: "" }}
                                onSubmit={submit}
                                validate={validate}
                                render={({ handleSubmit }) => (
                                    <form className="space-y-4" action="#" onSubmit={handleSubmit}>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            Сохранить Контрагента
                                        </h3>
                                        <Field<string>
                                            name="name"
                                            render={({ input, meta }) => (
                                                <div>
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                        Наименование
                                                    </label>
                                                    <input
                                                        data-testid="contr-agent-name-input-test"
                                                        className={meta.touched && meta.error ? "error" : ""}
                                                        type="text"
                                                        {...input}
                                                        placeholder="Введите имя"
                                                    />
                                                    {meta.touched && meta.error && (
                                                        <div className="error-text">{meta.error}</div>
                                                    )}
                                                </div>
                                            )}
                                        />
                                        <Field<string>
                                            name="inn"
                                            render={({ input, meta }) => (
                                                <div>
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                        ИНН
                                                    </label>
                                                    <input
                                                        data-testid="contr-agent-inn-input-test"
                                                        className={meta.touched && meta.error ? "error" : ""}
                                                        type="text"
                                                        {...input}
                                                        placeholder="Введите ИНН"
                                                    />
                                                    {meta.touched && meta.error && (
                                                        <div className="error-text">{meta.error}</div>
                                                    )}
                                                </div>
                                            )}
                                        />
                                        <Field<string>
                                            name="address"
                                            render={({ input, meta }) => (
                                                <div>
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                        Адрес
                                                    </label>
                                                    <input
                                                        data-testid="contr-agent-address-input-test"
                                                        className={meta.touched && meta.error ? "error" : ""}
                                                        type="text"
                                                        {...input}
                                                        placeholder="Введите Адрес"
                                                    />
                                                    {meta.touched && meta.error && (
                                                        <div className="error-text">{meta.error}</div>
                                                    )}
                                                </div>
                                            )}
                                        />
                                        <Field<string>
                                            name="kpp"
                                            render={({ input, meta }) => (
                                                <div>
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                        КПП
                                                    </label>
                                                    <input
                                                        data-testid="contr-agent-kpp-input-test"
                                                        className={meta.touched && meta.error ? "error" : ""}
                                                        type="text"
                                                        {...input}
                                                        placeholder="Введите КПП"
                                                    />
                                                    {meta.touched && meta.error && (
                                                        <div className="error-text">{meta.error}</div>
                                                    )}
                                                </div>
                                            )}
                                        />
                                        <div className="add-data-button">
                                            <button
                                                data-testid="add-contr-agent-button"
                                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                type="submit"
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
                                                Сохранить
                                            </button>
                                        </div>
                                    </form>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
