import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import StarField from './components/StarField';
import Scene1_Entry from './components/Scene1_Entry';
import Scene2_Question from './components/Scene2_Question';
import Scene3_Tease from './components/Scene3_Tease';
import Scene4_Photos from './components/Scene4_Photos';
import Scene5_Birthday from './components/Scene5_Birthday';
import CakeCutModal from './components/CakeCutModal';
import Scene6_Message from './components/Scene6_Message';
import Scene7_Ending from './components/Scene7_Ending';

function App() {
  const [currentScene, setCurrentScene] = useState(1);
  const [showCakeModal, setShowCakeModal] = useState(false);

  const handleAdvance = () => {
    setCurrentScene((prev) => prev + 1);
  };

  const handleReset = () => {
    setCurrentScene(1);
  };

  const handleOpenCake = () => {
    setShowCakeModal(true);
  };

  const handleCloseCake = () => {
    setShowCakeModal(false);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      {/* StarField Background - Always Visible */}
      <StarField />

      {/* Scene Controller */}
      <AnimatePresence mode="wait">
        {currentScene === 1 && (
          <motion.div
            key="scene1"
            style={{ position: 'absolute', inset: 0 }}
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Scene1_Entry onAdvance={handleAdvance} />
          </motion.div>
        )}

        {currentScene === 2 && (
          <motion.div
            key="scene2"
            style={{ position: 'absolute', inset: 0 }}
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Scene2_Question onAdvance={handleAdvance} />
          </motion.div>
        )}

        {currentScene === 3 && (
          <motion.div
            key="scene3"
            style={{ position: 'absolute', inset: 0 }}
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Scene3_Tease onAdvance={handleAdvance} />
          </motion.div>
        )}

        {currentScene === 4 && (
          <motion.div
            key="scene4"
            style={{ position: 'absolute', inset: 0 }}
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Scene4_Photos onAdvance={handleAdvance} />
          </motion.div>
        )}

        {currentScene === 5 && (
          <motion.div
            key="scene5"
            style={{ position: 'absolute', inset: 0 }}
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Scene5_Birthday onOpenCake={handleOpenCake} />
          </motion.div>
        )}

        {currentScene === 6 && (
          <motion.div
            key="scene6"
            style={{ position: 'absolute', inset: 0 }}
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Scene6_Message onAdvance={handleAdvance} />
          </motion.div>
        )}

        {currentScene === 7 && (
          <motion.div
            key="scene7"
            style={{ position: 'absolute', inset: 0 }}
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Scene7_Ending onReset={handleReset} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cake Cut Modal */}
      <CakeCutModal
        isOpen={showCakeModal}
        onClose={handleCloseCake}
        onAdvance={handleAdvance}
      />
    </div>
  );
}

export default App;
