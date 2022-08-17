import {
  ButtonGroup,
  Box,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  RangeSliderThumb,
  Center,
  Flex,
  Text
} from '@chakra-ui/react';
import ReactHowler from 'react-howler';
import { useEffect, useRef, useState } from 'react';
import {
  MdShuffle,
  MdSkipPrevious,
  MdSkipNext,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat
} from 'react-icons/md';
import { useStoreActions } from 'easy-peasy';
import { getNextSong, getPreviousSong, getRandomSong } from './lib/helpers';
import { formatTime } from '../../lib/formatter';

const Player = ({ songs, activeSong }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [index, setIndex] = useState(0);
  const [seekValue, setSeekValue] = useState(0.0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [isRepeatActive, setIsRepeatActive] = useState(false);
  const [isShuffleActive, setIsShuffleActive] = useState(false);
  const [duration, setDuration] = useState(0.0);
  const soundRef = useRef(null);

  useEffect(() => {
    let timerId;
    if (isPlaying && !isSeeking) {
      const f = () => {
        setSeekValue(soundRef.current.seek());
        timerId = requestAnimationFrame(f);
      };
      timerId = requestAnimationFrame(f);
      return () => cancelAnimationFrame(timerId);
    }
    cancelAnimationFrame(timerId);
  }, [isPlaying, isSeeking]);

  const onShuffle = () => setIsShuffleActive(state => !state);
  const onRepeat = () => setIsRepeatActive(state => !state);
  const playPreviousSong = () =>
    setIndex(state => getPreviousSong(state, songs.length - 1));
  const playNextSong = () => {
    setIndex(state => {
      if (isShuffleActive) {
        const nextSong = getRandomSong(songs.length);
        return nextSong === state ? playNextSong() : nextSong;
      }
      return getNextSong(state, songs.length - 1);
    });
  };
  const onEnd = () => {
    if (isRepeatActive) {
      setSeekValue(0);
      soundRef.current.seek(0);
    } else {
      playNextSong();
    }
  };

  const onLoad = () => {
    const songDuration = soundRef.current.duration();
    setDuration(songDuration);
  };

  const onSeek = event => {
    setSeekValue(parseFloat(event[0]));
    soundRef.current.seek(event[0]);
  };

  return (
    <Box>
      <Box>
        <ReactHowler
          playing={isPlaying}
          src={activeSong.url}
          ref={soundRef}
          volume={0.1}
          onLoad={onLoad}
          onEnd={onEnd}
        />
      </Box>
      <Center color="gray.600">
        <ButtonGroup>
          <IconButton
            outline="none"
            variant="link"
            aria-label="shuffle"
            fontSize="24px"
            icon={<MdShuffle />}
            color={isShuffleActive ? 'green.400' : 'inherit'}
            onClick={onShuffle}
          />
          <IconButton
            outline="none"
            variant="link"
            aria-label="skip to previous"
            fontSize="24px"
            icon={<MdSkipPrevious />}
            onClick={playPreviousSong}
          />
          {isPlaying ? (
            <IconButton
              outline="none"
              variant="link"
              aria-label="pause"
              fontSize="40px"
              color="white"
              icon={<MdOutlinePauseCircleFilled />}
              onClick={() => setIsPlaying(false)}
            />
          ) : (
            <IconButton
              outline="none"
              variant="link"
              aria-label="play"
              fontSize="40px"
              color="white"
              icon={<MdOutlinePlayCircleFilled />}
              onClick={() => setIsPlaying(true)}
            />
          )}
          <IconButton
            outline="none"
            variant="link"
            aria-label="skip to next"
            fontSize="24px"
            icon={<MdSkipNext />}
            onClick={playNextSong}
          />
          <IconButton
            outline="none"
            variant="link"
            aria-label="repeat"
            fontSize="24px"
            icon={<MdOutlineRepeat />}
            color={isRepeatActive ? 'green.400' : 'inherit'}
            onClick={onRepeat}
          />
        </ButtonGroup>
      </Center>
      <Box color="gray.600">
        <Flex justify="center" align="center">
          <Box marginRight={4} minWidth="28px">
            <Text fontSize="xs">{formatTime(seekValue)}</Text>
          </Box>
          <RangeSlider
            // eslint-disable-next-line jsx-a11y/aria-proptypes
            aria-label={['min', 'max']}
            step={0}
            min={0}
            max={duration ? +duration.toFixed(2) : 0}
            id="player-range"
            onChange={onSeek}
            value={[seekValue]}
            onChangeStart={() => setIsSeeking(true)}
            onChangeEnd={() => setIsSeeking(false)}
          >
            <RangeSliderTrack bg="gray.800">
              <RangeSliderFilledTrack bg="gray.600" />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
          </RangeSlider>
          <Box marginLeft={4} minWidth="28px">
            <Text fontSize="xs">{formatTime(duration)}</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
export default Player;
