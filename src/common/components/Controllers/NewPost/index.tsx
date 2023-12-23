import React, { useRef } from 'react';
import { BottomSheetView, BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import { Background } from './styled';
import Button from '../Button';
import { PubliForm } from '../../Forms/PubliForm';

export function NewPost(){
    const bottomSheetRef = useRef<BottomSheetModal>(null);

    function handleSnapPress() {
        bottomSheetRef.current?.present();
    }

    return (
        <>
          <Button title="Fazer uma publicação" onPress={handleSnapPress} />
    
          <BottomSheetModalProvider>
            <BottomSheetModal
              ref={bottomSheetRef}
              snapPoints={['50%']}
              style={{ padding: 24 }}
              enablePanDownToClose={true}
              backdropComponent={() => <Background />}
            >
              <BottomSheetView>
                <PubliForm />
              </BottomSheetView>
            </BottomSheetModal>
          </BottomSheetModalProvider>
        </>
      );
}