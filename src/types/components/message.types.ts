import { CuboidArgs } from "@react-three/rapier";
import { Vector3 } from "three";

export interface IMessage {
  title: string;
  buttonTitle?: string;
  args?: CuboidArgs;
  position: Vector3;
  onSpace?: (e: { hideMe: () => void }) => void;
}

export interface ILogics {
  position: Vector3;
  onSpace?: (e: { hideMe: () => void }) => void;
}
