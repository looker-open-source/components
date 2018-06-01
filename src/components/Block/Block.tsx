import * as React from 'react'
import classNames from 'classnames'
import * as styles from './Block.scss'

export type SpacingValues =
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'

  export type ColorValues =
  | 'space'
  | 'space-400'
  | 'space-300'
  | 'space-200'
  | 'fog'
  | 'fog-400'
  | 'fog-300'
  | 'fog-200'
  | 'purple'
  | 'purple-400'
  | 'purple-300'
  | 'purple-600'
  | 'purple-700'
  | 'blue'
  | 'blue-400'
  | 'blue-300'
  | 'blue-600'
  | 'blue-700'
  | 'green'
  | 'green-400'
  | 'green-300'
  | 'green-600'
  | 'green-700'
  | 'yellow'
  | 'yellow-400'
  | 'yellow-300'
  | 'yellow-600'
  | 'yellow-700'
  | 'red'
  | 'red-400'
  | 'red-300'
  | 'red-600'
  | 'red-700'


export interface BlockProps {
  background?: ColorValues
  width?: number
  /** Sets the align-self property when in a BlockGroup */
  align?: 'center' | 'start' | 'end' | 'baseline' | undefined
  // padding properties
  /** Sets padding on all sides */
  p?: SpacingValues
  /** Sets padding top */
  pt?: SpacingValues
  /** Sets padding right */
  pr?: SpacingValues
  /** Sets padding bottom */
  pb?: SpacingValues
  /** Sets padding left */
  pl?: SpacingValues
  /** Sets padding on left and right sides */
  px?: SpacingValues
  /** Sets padding on top and bottom sides */
  py?: SpacingValues

  // margin properties
  /** Sets margin on all sides */
  m?: SpacingValues
  /** Sets margin top */
  mt?: SpacingValues
  /** Sets margin right */
  mr?: SpacingValues
   /** Sets margin bottom */
  mb?: SpacingValues
  /** Sets margin left */
  ml?: SpacingValues
  /** Sets margin on left and right sides */
  mx?: SpacingValues
  /** Sets margin on top and bottom sides */
  my?: SpacingValues

  className?: string | undefined
}

type PropertyBag = {
  [key: string]: any
}

/**
A building block for facilitating consistent layout, spacing, and alignment throughout an interface.
*/

export const Block: React.SFC<BlockProps> = ({className, p, pt, pr, pb, pl, px, py, m, mt, mr, mb, ml, mx, my, background, align,...args}) => {

  const styleableProps: PropertyBag = {
    [styles.pxs]:   p == "xs",
    [styles.ps]:    p == "s",
    [styles.pm]:    p == "m",
    [styles.pl]:    p == "l",
    [styles.pxl]:   p == "xl",
    [styles.p2xl]:  p == "2xl",
    [styles.p3xl]:  p == "3xl",
    [styles.p4xl]:  p == "4xl",

    [styles.ptxs]:   pt == "xs",
    [styles.pts]:    pt == "s",
    [styles.ptm]:    pt == "m",
    [styles.ptl]:    pt == "l",
    [styles.ptxl]:   pt == "xl",
    [styles.pt2xl]:  pt == "2xl",
    [styles.pt3xl]:  pt == "3xl",
    [styles.pt4xl]:  pt == "4xl",

    [styles.prxs]:   pr == "xs",
    [styles.prs]:    pr == "s",
    [styles.prm]:    pr == "m",
    [styles.prl]:    pr == "l",
    [styles.prxl]:   pr == "xl",
    [styles.pr2xl]:  pr == "2xl",
    [styles.pr3xl]:  pr == "3xl",
    [styles.pr4xl]:  pr == "4xl",

    [styles.pbxs]:   pb == "xs",
    [styles.pbs]:    pb == "s",
    [styles.pbm]:    pb == "m",
    [styles.pbl]:    pb == "l",
    [styles.pbxl]:   pb == "xl",
    [styles.pb2xl]:  pb == "2xl",
    [styles.pb3xl]:  pb == "3xl",
    [styles.pb4xl]:  pb == "4xl",

    [styles.plxs]:   pl == "xs",
    [styles.pls]:    pl == "s",
    [styles.plm]:    pl == "m",
    [styles.pll]:    pl == "l",
    [styles.plxl]:   pl == "xl",
    [styles.pl2xl]:  pl == "2xl",
    [styles.pl3xl]:  pl == "3xl",
    [styles.pl4xl]:  pl == "4xl",


    [styles.plrxs]:   px == "xs",
    [styles.plrs]:    px == "s",
    [styles.plrm]:    px == "m",
    [styles.plrl]:    px == "l",
    [styles.plrxl]:   px == "xl",
    [styles.plr2xl]:  px == "2xl",
    [styles.plr3xl]:  px == "3xl",
    [styles.plr4xl]:  px == "4xl",


    [styles.ptbxs]:   py == "xs",
    [styles.ptbs]:    py == "s",
    [styles.ptbm]:    py == "m",
    [styles.ptbl]:    py == "l",
    [styles.ptbxl]:   py == "xl",
    [styles.ptb2xl]:  py == "2xl",
    [styles.ptb3xl]:  py == "3xl",
    [styles.ptb4xl]:  py == "4xl",


    [styles.mxs]:   m == "xs",
    [styles.ms]:    m == "s",
    [styles.mm]:    m == "m",
    [styles.ml]:    m == "l",
    [styles.mxl]:   m == "xl",
    [styles.m2xl]:  m == "2xl",
    [styles.m3xl]:  m == "3xl",
    [styles.m4xl]:  m == "4xl",

    [styles.mtxs]:   mt == "xs",
    [styles.mts]:    mt == "s",
    [styles.mtm]:    mt == "m",
    [styles.mtl]:    mt == "l",
    [styles.mtxl]:   mt == "xl",
    [styles.mt2xl]:  mt == "2xl",
    [styles.mt3xl]:  mt == "3xl",
    [styles.mt4xl]:  mt == "4xl",

    [styles.mrxs]:   mr == "xs",
    [styles.mrs]:    mr == "s",
    [styles.mrm]:    mr == "m",
    [styles.mrl]:    mr == "l",
    [styles.mrxl]:   mr == "xl",
    [styles.mr2xl]:  mr == "2xl",
    [styles.mr3xl]:  mr == "3xl",
    [styles.mr4xl]:  mr == "4xl",

    [styles.mbxs]:   mb == "xs",
    [styles.mbs]:    mb == "s",
    [styles.mbm]:    mb == "m",
    [styles.mbl]:    mb == "l",
    [styles.mbxl]:   mb == "xl",
    [styles.mb2xl]:  mb == "2xl",
    [styles.mb3xl]:  mb == "3xl",
    [styles.mb4xl]:  mb == "4xl",

    [styles.mlxs]:   ml == "xs",
    [styles.mls]:    ml == "s",
    [styles.mlm]:    ml == "m",
    [styles.mll]:    ml == "l",
    [styles.mlxl]:   ml == "xl",
    [styles.ml2xl]:  ml == "2xl",
    [styles.ml3xl]:  ml == "3xl",
    [styles.ml4xl]:  ml == "4xl",


    [styles.mlrxs]:   mx == "xs",
    [styles.mlrs]:    mx == "s",
    [styles.mlrm]:    mx == "m",
    [styles.mlrl]:    mx == "l",
    [styles.mlrxl]:   mx == "xl",
    [styles.mlr2xl]:  mx == "2xl",
    [styles.mlr3xl]:  mx == "3xl",
    [styles.mlr4xl]:  mx == "4xl",


    [styles.mtbxs]:   my == "xs",
    [styles.mtbs]:    my == "s",
    [styles.mtbm]:    my == "m",
    [styles.mtbl]:    my == "l",
    [styles.mtbxl]:   my == "xl",
    [styles.mtb2xl]:  my == "2xl",
    [styles.mtb3xl]:  my == "3xl",
    [styles.mtb4xl]:  my == "4xl",


    [styles.alignCenter]: align == 'center',
    [styles.alignFlexStart]: align == 'start',
    [styles.alignFlexEnd]: align == 'end',
    [styles.alignBaseline]: align == 'baseline',

    [styles.bgPurple]: background == 'purple',
    [styles.bgPurple400]: background == 'purple-400',
    [styles.bgPurple300]: background == 'purple-300',
    [styles.bgPurple600]: background == 'purple-600',
    [styles.bgPurple700]: background == 'purple-700',

    [styles.bgBlue]: background == 'blue',
    [styles.bgBlue400]: background == 'blue-400',
    [styles.bgBlue300]: background == 'blue-300',
    [styles.bgBlue600]: background == 'blue-600',
    [styles.bgBlue700]: background == 'blue-700',

    [styles.bgGreen]: background == 'green',
    [styles.bgGreen400]: background == 'green-400',
    [styles.bgGreen300]: background == 'green-300',
    [styles.bgGreen600]: background == 'green-600',
    [styles.bgGreen700]: background == 'green-700',

    [styles.bgYellow]: background == 'yellow',
    [styles.bgYellow400]: background == 'yellow-400',
    [styles.bgYellow300]: background == 'yellow-300',
    [styles.bgYellow600]: background == 'yellow-600',
    [styles.bgYellow700]: background == 'yellow-700',

    [styles.bgRed]: background == 'red',
    [styles.bgRed400]: background == 'red-400',
    [styles.bgRed300]: background == 'red-300',
    [styles.bgRed600]: background == 'red-600',
    [styles.bgRed700]: background == 'red-700',

    [styles.bgSpace]: background == 'space',
    [styles.bgSpace400]: background == 'space-400',
    [styles.bgSpace300]: background == 'space-300',
    [styles.bgSpace200]: background == 'space-200',

    [styles.bgFog]: background == 'fog',
    [styles.bgFog400]: background == 'fog-400',
    [styles.bgFog300]: background == 'fog-300',
    [styles.bgFog200]: background == 'fog-200',
  }

  return (
    <div className={classNames(styles.block, className, styleableProps)} {...args}>
      {args.children}
    </div>
  )
}
