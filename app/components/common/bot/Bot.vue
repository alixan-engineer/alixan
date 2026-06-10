<!-- components/FutureRobot.vue -->
<template>
	<div
		ref="robotRef"
		class="relative w-90 h-130 flex items-center justify-center select-none"
		@mousemove="handleMove"
	>
		<div class="robot" :style="robotStyle">
			<!-- HEAD -->
			<div class="head" :style="headStyle">
				<div class="visor">
					<div class="eye left-eye" :style="eyeStyle" />
					<div class="eye right-eye" :style="eyeStyle" />
				</div>
				<div class="head-shine" />
			</div>

			<!-- NECK -->
			<div class="neck" />

			<!-- BODY -->
			<div class="body" :style="bodyStyle">
				<div class="body-shine" />
			</div>

			<!-- LEFT ARM -->
			<div class="arm left-arm" :style="leftArmStyle">
				<div class="upper-arm" />
				<div class="forearm" />
				<div class="hand" />
			</div>

			<!-- RIGHT ARM -->
			<div class="arm right-arm" :style="rightArmStyle">
				<div class="upper-arm" />
				<div class="forearm" />
				<div class="hand" />
			</div>

			<!-- HIPS -->
			<div class="hips" />

			<!-- LEGS -->
			<div class="legs">
				<div class="leg" />
				<div class="leg" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const robotRef = ref<HTMLElement | null>(null);

const mx = ref(0);
const my = ref(0);

const clamp = (value: number, min: number, max: number) =>
	Math.min(max, Math.max(min, value));

const handleMove = (event: MouseEvent) => {
	if (!robotRef.value) return;

	const rect = robotRef.value.getBoundingClientRect();
	const x = (event.clientX - rect.left) / rect.width - 0.5;
	const y = (event.clientY - rect.top) / rect.height - 0.5;

	mx.value = clamp(x * 2, -1, 1);
	my.value = clamp(y * 2, -1, 1);
};

const robotStyle = computed(() => ({
	transform: `
    rotateX(${my.value * -5}deg)
    rotateY(${mx.value * 7}deg)
  `,
}));

const headStyle = computed(() => ({
	transform: `
    translateX(${mx.value * 10}px)
    translateY(${my.value * 6}px)
    rotateZ(${mx.value * 10}deg)
    rotateY(${mx.value * 18}deg)
    rotateX(${my.value * -12}deg)
  `,
}));

const bodyStyle = computed(() => ({
	transform: `
    rotateY(${mx.value * 8}deg)
    rotateX(${my.value * -4}deg)
  `,
}));

const eyeStyle = computed(() => ({
	transform: `translate(${mx.value * 5}px, ${my.value * 3}px)`,
}));

const leftArmStyle = computed(() => ({
	transform: `
    rotateZ(${-22 + mx.value * 12}deg)
    rotateX(${my.value * 18}deg)
  `,
}));

const rightArmStyle = computed(() => ({
	transform: `
    rotateZ(${22 + mx.value * 12}deg)
    rotateX(${my.value * -18}deg)
  `,
}));
</script>

<style scoped>
.robot {
	position: relative;
	width: 260px;
	height: 480px;
	transform-style: preserve-3d;
	transition: transform 180ms ease-out;
}

/* HEAD */

.head {
	position: absolute;
	left: 50%;
	top: 20px;
	width: 96px;
	height: 82px;
	margin-left: -48px;
	border-radius: 42% 58% 48% 52%;
	background:
		radial-gradient(
			circle at 28% 22%,
			rgba(255, 255, 255, 0.95),
			transparent 15%
		),
		radial-gradient(
			circle at 70% 18%,
			rgba(255, 255, 255, 0.45),
			transparent 20%
		),
		linear-gradient(135deg, #f5f5f5 0%, #090909 35%, #000 65%, #e5e5e5 100%);
	box-shadow:
		inset 18px 12px 24px rgba(255, 255, 255, 0.25),
		inset -20px -18px 30px rgba(0, 0, 0, 0.95),
		0 18px 50px rgba(255, 255, 255, 0.08);
	transform-style: preserve-3d;
	transition: transform 160ms ease-out;
	z-index: 10;
}

.visor {
	position: absolute;
	left: 20px;
	top: 25px;
	width: 58px;
	height: 28px;
	border-radius: 999px;
	background: rgba(0, 0, 0, 0.78);
	transform: rotate(-18deg);
	box-shadow:
		inset 0 0 16px rgba(255, 255, 255, 0.16),
		0 0 16px rgba(255, 255, 255, 0.08);
	overflow: hidden;
}

.eye {
	position: absolute;
	top: 10px;
	width: 7px;
	height: 7px;
	border-radius: 999px;
	background: white;
	box-shadow: 0 0 10px white;
	transition: transform 90ms ease-out;
}

.left-eye {
	left: 17px;
}

.right-eye {
	right: 17px;
}

.head-shine {
	position: absolute;
	left: 16px;
	top: 9px;
	width: 44px;
	height: 14px;
	border-radius: 999px;
	background: rgba(255, 255, 255, 0.7);
	filter: blur(3px);
	transform: rotate(-28deg);
}

/* NECK */

.neck {
	position: absolute;
	left: 50%;
	top: 95px;
	width: 36px;
	height: 30px;
	margin-left: -18px;
	border-radius: 10px;
	background: linear-gradient(90deg, #111, #eee, #050505);
	box-shadow: inset 0 0 14px black;
	z-index: 4;
}

/* BODY */

.body {
	position: absolute;
	left: 50%;
	top: 115px;
	width: 128px;
	height: 190px;
	margin-left: -64px;
	border-radius: 46% 46% 32% 32%;
	background:
		radial-gradient(
			circle at 35% 18%,
			rgba(255, 255, 255, 0.38),
			transparent 24%
		),
		linear-gradient(115deg, #2a2a2a 0%, #090909 42%, #000 70%, #444 100%);
	box-shadow:
		inset 18px 8px 35px rgba(255, 255, 255, 0.16),
		inset -24px -20px 45px rgba(0, 0, 0, 0.95),
		0 25px 55px rgba(0, 0, 0, 0.8);
	transition: transform 190ms ease-out;
	z-index: 5;
}

.body-shine {
	position: absolute;
	left: 22px;
	top: 24px;
	width: 56px;
	height: 130px;
	border-radius: 999px;
	background: linear-gradient(
		to bottom,
		rgba(255, 255, 255, 0.18),
		transparent
	);
	filter: blur(8px);
}

/* ARMS */

.arm {
	position: absolute;
	top: 135px;
	width: 64px;
	height: 190px;
	transform-origin: top center;
	transition: transform 170ms ease-out;
	z-index: 3;
}

.left-arm {
	left: 20px;
}

.right-arm {
	right: 20px;
}

.upper-arm,
.forearm {
	position: absolute;
	left: 16px;
	width: 36px;
	border-radius: 999px;
	background:
		radial-gradient(
			circle at 30% 20%,
			rgba(255, 255, 255, 0.5),
			transparent 20%
		),
		linear-gradient(110deg, #303030, #030303 58%, #777);
	box-shadow:
		inset 8px 8px 18px rgba(255, 255, 255, 0.12),
		inset -10px -10px 20px rgba(0, 0, 0, 0.9),
		0 12px 30px rgba(0, 0, 0, 0.7);
}

.upper-arm {
	top: 0;
	height: 86px;
}

.forearm {
	top: 92px;
	height: 78px;
}

.hand {
	position: absolute;
	left: 18px;
	top: 165px;
	width: 34px;
	height: 28px;
	border-radius: 40% 40% 55% 55%;
	background: linear-gradient(135deg, #eee, #050505 45%, #333);
	box-shadow:
		inset -8px -8px 14px black,
		0 8px 20px rgba(0, 0, 0, 0.8);
}

/* HIPS / LEGS */

.hips {
	position: absolute;
	left: 50%;
	top: 295px;
	width: 118px;
	height: 54px;
	margin-left: -59px;
	border-radius: 28px;
	background: linear-gradient(135deg, #333, #030303, #555);
	box-shadow:
		inset 8px 8px 20px rgba(255, 255, 255, 0.1),
		inset -12px -12px 22px black;
	z-index: 4;
}

.legs {
	position: absolute;
	left: 50%;
	top: 340px;
	width: 110px;
	margin-left: -55px;
	display: flex;
	justify-content: space-between;
}

.leg {
	width: 42px;
	height: 120px;
	border-radius: 999px 999px 28px 28px;
	background:
		radial-gradient(
			circle at 35% 15%,
			rgba(255, 255, 255, 0.35),
			transparent 20%
		),
		linear-gradient(105deg, #222, #020202 55%, #5a5a5a);
	box-shadow:
		inset 8px 8px 18px rgba(255, 255, 255, 0.12),
		inset -12px -12px 22px black,
		0 15px 25px rgba(0, 0, 0, 0.7);
}
</style>
