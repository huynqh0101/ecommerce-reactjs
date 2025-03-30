import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routers from '@/routers/routers';
import { Suspense } from 'react';
import { SidebarProvider } from '@/contexts/SideBarProvider';
import SideBar from '@components/Sidebar/Sidebar';
import { ToastProvider } from '@/contexts/ToastProvider';
import { StoreProvider } from '@/contexts/storeProvider';
import { OurShopProvider } from '@/contexts/OurShopProvider';

function App() {
    return (
        <BrowserRouter>
            {' '}
            {/*BrowserRouter ra ngoài cùng */}
            <StoreProvider>
                <ToastProvider>
                    <SidebarProvider>
                        <OurShopProvider>
                            <SideBar />
                            <Suspense fallback={<div>Loading...</div>}>
                                <Routes>
                                    {routers.map((item, index) => (
                                        <Route
                                            path={item.path}
                                            element={<item.component />}
                                            key={index}
                                        />
                                    ))}
                                </Routes>
                            </Suspense>
                        </OurShopProvider>
                    </SidebarProvider>
                </ToastProvider>
            </StoreProvider>
        </BrowserRouter>
    );
}

export default App;
