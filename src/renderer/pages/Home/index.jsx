import { useEffect, useState } from 'react';
import { quitApp } from '../../utils/rendererHandlers';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onAppStart } from '../../thunks/appThunk';
import { clearAppInfoFromLocalStorage } from '../../utils/localStorageUtils/appInfo';
import { isElectron } from '../../utils/elctronHelpers';
import { isUser } from '../../utils/reactHelpers';
// import { logout } from "thunks/userThunk";
// import NavBar from "components/NavBar";

const Home = () => {
  // const [filePath, setFilePath] = useState("");
  const [appInfo, setAppInfo] = useState({});
  const _isElectron = isElectron();
  const _isUser = isUser();
  // const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onAppStart())?.then((res) => {
      if (res?.type?.includes('fulfilled')) {
        const _electron = localStorage.getItem('electron-app');
        const { node, chrome, electron } =
          _isElectron && _electron && JSON.parse(_electron);

        setAppInfo({ node, chrome, electron });
      }
    });

    /**
     * initialing function call to
     */
    try {
      quitApp(() => {
        // Clear's the application info from the local storage
        clearAppInfoFromLocalStorage();
      });
    } catch (err) {
      console.log('err :>> ', err);
    }
  }, [dispatch, _isElectron]);

  // const onFileOpenHandler = async () => {
  //   const fp = await filePathRenderer();
  //   fp && setFilePath(fp);
  // };

  return (
    <div>
      <h1>Electron-React Architecture</h1>

      {_isElectron && (
        <p id="info">{`This app is powered with Node version: v${appInfo?.node}, Chrome version: v${appInfo?.chrome} and Electron version: v${appInfo?.electron} `}</p>
      )}

      <div style={{ marginBottom: '2rem' }}>
        {_isUser && <Link to="/user">user</Link>}
      </div>
    </div>
  );
};

export default Home;
