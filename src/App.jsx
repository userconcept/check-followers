import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';

import FormGitHub from './components/FormGitHub/FormGitHub.jsx';
import FormBehance from './components/FormBehance/FormBehance.jsx';
import FormInstagram from './components/FormInstagram/FormInstagram.jsx';

function App() {
    return (
        <>
            <Routes>
                <Route path="/check-followers" element={<Layout />}>
                    <Route index element={<FormGitHub />} />
                    <Route path="behance" element={<FormBehance />} />
                    <Route path="instagram" element={<FormInstagram />} />
                    <Route path="*" element={<FormGitHub />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
