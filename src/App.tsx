/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from '@hooks'
import Loading from '@components/loading'
import Approutes from './Routes'
import { useEffect ,useState} from 'react'
import "./index.css";
import { getProfile, getListNoPayment } from '@apis';
import { setLocalStorage, STORAGE } from '@utils'

function App() {
  const { isLoading, loadProfileAction } = useAuth()
  const [dataInfor, setDataInfor] = useState<any>([])
  const [listnoPayment, setListnoPayment] = useState<any>([]);
  useEffect(() => {
    loadProfileAction()
    getProfile(setDataInfor)
    getListNoPayment(setListnoPayment)
  }, [])

    if(listnoPayment.length > 0){
    setLocalStorage('count',true)
    }

  setLocalStorage(STORAGE.PROFILE_USER,JSON.stringify(dataInfor))

  return isLoading ? (
    <Loading />
  ) : (
    <Approutes />
  )
}

export default App
