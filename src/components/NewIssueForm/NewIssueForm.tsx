import { useMutation } from '@apollo/client'
import { Field, Form, Formik } from 'formik'
import { ADD_NEW_ISSUE } from '../../query/users'
import styles from './NewIssueForm.module.css'

interface INewIssueForm {
    repositoryId: string
    setRepositoryId: React.Dispatch<React.SetStateAction<string>>
}

export const NewIssueForm: React.FC<INewIssueForm> = ({ repositoryId, setRepositoryId }) => {
    const [addNewIssue] = useMutation(ADD_NEW_ISSUE)

    return (
        <div className={styles.modal}>
            <div className={styles.modal__title}>
                New Issue
            </div>
            <Formik 
                initialValues={{ title: '', description: '' }}
                onSubmit={({title, description}, { resetForm }) => {
                    console.log(title + ' ' + description);
                    resetForm()
                    addNewIssue({ variables: { id: repositoryId, title, body: description } })                    
                }}
            >
                <Form className={styles.form}>
                    <Field className={styles.form__field} name='title'/>
                    <Field className={styles.form__field} as='textarea' name='description'/>
                    <button className={styles.form__btn} type='submit'>Create</button>
                    <button className={styles.form__btn} onClick={() => setRepositoryId('')}>Cancel</button>
                </Form>
            </Formik>
        </div>
    )
}