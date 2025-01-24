import { v4 as uuidv4 } from 'uuid';
import { SourceNode } from '../../pages/monitor/types';

export const defaultGrid: SourceNode[] = [
  { sourceSlug: 'nbc-news', uuid: uuidv4() },
  { sourceSlug: 'atv-mas', uuid: uuidv4() },
  { sourceSlug: 'hch-vivo', uuid: uuidv4() },
  {
    sourceSlug: '24HTVN_YT',
    uuid: uuidv4()
  },
  { sourceSlug: 'tn', uuid: uuidv4() },
  { sourceSlug: 'RELOJ_CHILE', uuid: uuidv4() }
];
