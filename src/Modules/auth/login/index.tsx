import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from 'antd'

import {
  FormInput,
  FormPassword,
  FormLabel
} from '@components'
import { useAuth } from '@hooks'
import { Wrapper, Right } from '@themes/facit'
import LoginScheme from './scheme'
import { Row } from './styled'
import LoginForm from '@type/Form/LoginForm'

const CreateCourseScreen = () => {
  const { t } = useTranslation(['common'])
  const form = useForm<LoginForm>({
    resolver: yupResolver(LoginScheme(t)),
  })
  const { handleSubmit } = form
  const { loginAction } = useAuth()

  const onSubmit = useCallback((data :any) => {
    loginAction(data)
  }, [loginAction])

  return (
    <Wrapper>
      <div className="form-wrapper">
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <FormLabel title={'Email'} description="Required" />
              <Right>
                <FormInput name="email" />
              </Right>
            </Row>
            <Row>
              <FormLabel title={'Password'} description="Required" />
              <Right>
                <FormPassword name="password" />
              </Right>
            </Row>

            <div className="form-action-group">
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </Wrapper>
  )
}

export default CreateCourseScreen
