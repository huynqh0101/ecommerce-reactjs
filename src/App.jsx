import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routers from '@/routers/routers';
import { Suspense } from 'react';
import { SidebarProvider } from '@/contexts/SideBarProvider';
import SideBar from '@components/Sidebar/Sidebar';
import { ToastProvider } from '@/contexts/ToastProvider';
import { StoreProvider } from '@/contexts/storeProvider';
import { OurShopProvider } from '@/contexts/OurShopProvider'; // ✅ Import OurShopProvider

function App() {
    return (
        <StoreProvider>
            <ToastProvider>
                <SidebarProvider>
                    <OurShopProvider> {/* ✅ Bọc ứng dụng với OurShopProvider */}
                        <SideBar />
                        <BrowserRouter>
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
                        </BrowserRouter>
                    </OurShopProvider>
                </SidebarProvider>
            </ToastProvider>
        </StoreProvider>
    );
}

export default App;
