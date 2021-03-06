/*
 * Copyright (C) 2017 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

/** List of diacritics. */
const diacritics: { [base: string]: number[] } = {
    "A": [
        192, 193, 194, 195, 196, 197, 256, 258, 260, 461, 478, 480, 506, 512, 514, 550, 570, 7680, 7840, 7842, 7844,
        7846, 7848, 7850, 7852, 7854, 7856, 7858, 7860, 7862, 9398, 11375, 65313
    ],
    "AA": [ 42802 ],
    "AE": [ 198, 482, 508 ],
    "AO": [ 42804 ],
    "AU": [ 42806 ],
    "AV": [ 42808, 42810 ],
    "AY": [ 42812 ],
    "B": [ 385, 386, 579, 7682, 7684, 7686, 9399, 65314 ],
    "C": [ 199, 262, 264, 266, 268, 391, 571, 7688, 9400, 42814, 65315 ],
    "D": [ 270, 272, 393, 394, 395, 7690, 7692, 7694, 7696, 7698, 9401, 42873, 65316 ],
    "DZ": [ 452, 497 ],
    "Dz": [ 453, 498 ],
    "E": [
        200, 201, 202, 203, 274, 276, 278, 280, 282, 398, 400, 516, 518, 552, 7700, 7702, 7704, 7706, 7708, 7864, 7866,
        7868, 7870, 7872, 7874, 7876, 7878, 9402, 65317
    ],
    "F": [ 401, 7710, 9403, 42875, 65318 ],
    "G": [ 284, 286, 288, 290, 403, 484, 486, 500, 7712, 9404, 42877, 42878, 42912, 65319 ],
    "H": [ 292, 294, 542, 7714, 7716, 7718, 7720, 7722, 9405, 11367, 11381, 42893, 65320 ],
    "I": [ 204, 205, 206, 207, 296, 298, 300, 302, 304, 407, 463, 520, 522, 7724, 7726, 7880, 7882, 9406, 65321 ],
    "J": [ 308, 584, 9407, 65322 ],
    "K": [ 310, 408, 488, 7728, 7730, 7732, 9408, 11369, 42816, 42818, 42820, 42914, 65323 ],
    "L": [ 313, 315, 317, 319, 321, 573, 7734, 7736, 7738, 7740, 9409, 11360, 11362, 42822, 42824, 42880, 65324 ],
    "LJ": [ 455 ],
    "Lj": [ 456 ],
    "M": [ 412, 7742, 7744, 7746, 9410, 11374, 65325 ],
    "N": [ 209, 323, 325, 327, 413, 504, 544, 7748, 7750, 7752, 7754, 9411, 42896, 42916, 65326 ],
    "NJ": [ 458 ],
    "Nj": [ 459 ],
    "O": [
        210, 211, 212, 213, 214, 216, 332, 334, 336, 390, 415, 416, 465, 490, 492, 510, 524, 526, 554, 556, 558, 560,
        7756, 7758, 7760, 7762, 7884, 7886, 7888, 7890, 7892, 7894, 7896, 7898, 7900, 7902, 7904, 7906, 9412, 42826,
        42828, 65327
    ],
    "OI": [ 418 ],
    "OO": [ 42830 ],
    "OU": [ 546 ],
    "P": [ 420, 7764, 7766, 9413, 11363, 42832, 42834, 42836, 65328 ],
    "Q": [ 586, 9414, 42838, 42840, 65329 ],
    "R": [ 340, 342, 344, 528, 530, 588, 7768, 7770, 7772, 7774, 9415, 11364, 42842, 42882, 42918, 65330 ],
    "S": [ 346, 348, 350, 352, 536, 7776, 7778, 7780, 7782, 7784, 7838, 9416, 11390, 42884, 42920, 65331 ],
    "T": [ 354, 356, 358, 428, 430, 538, 574, 7786, 7788, 7790, 7792, 9417, 42886, 65332 ],
    "TZ": [ 42792 ],
    "U": [
        217, 218, 219, 220, 360, 362, 364, 366, 368, 370, 431, 467, 469, 471, 473, 475, 532, 534, 580, 7794, 7796,
        7798, 7800, 7802, 7908, 7910, 7912, 7914, 7916, 7918, 7920, 9418, 65333
    ],
    "V": [ 434, 581, 7804, 7806, 9419, 42846, 65334 ],
    "VY": [ 42848 ],
    "W": [ 372, 7808, 7810, 7812, 7814, 7816, 9420, 11378, 65335 ],
    "X": [ 7818, 7820, 9421, 65336 ],
    "Y": [ 221, 374, 376, 435, 562, 590, 7822, 7922, 7924, 7926, 7928, 7934, 9422, 65337 ],
    "Z": [ 377, 379, 381, 437, 548, 7824, 7826, 7828, 9423, 11371, 11391, 42850, 65338 ],
    "a": [
        224, 225, 226, 227, 228, 229, 257, 259, 261, 462, 479, 481, 507, 513, 515, 551, 592, 7681, 7834, 7841, 7843,
        7845, 7847, 7849, 7851, 7853, 7855, 7857, 7859, 7861, 7863, 9424, 11365, 65345
    ],
    "aa": [ 42803 ],
    "ae": [ 230, 483, 509 ],
    "ao": [ 42805 ],
    "au": [ 42807 ],
    "av": [ 42809, 42811 ],
    "ay": [ 42813 ],
    "b": [ 384, 387, 595, 7683, 7685, 7687, 9425, 65346 ],
    "c": [ 231, 263, 265, 267, 269, 392, 572, 7689, 8580, 9426, 42815, 65347 ],
    "d": [ 271, 273, 396, 598, 599, 7691, 7693, 7695, 7697, 7699, 9427, 42874, 65348 ],
    "dz": [ 454, 499 ],
    "e": [
        232, 233, 234, 235, 275, 277, 279, 281, 283, 477, 517, 519, 553, 583, 603, 7701, 7703, 7705, 7707, 7709, 7865,
        7867, 7869, 7871, 7873, 7875, 7877, 7879, 9428, 65349
    ],
    "f": [ 402, 7711, 9429, 42876, 65350 ],
    "g": [ 285, 287, 289, 291, 485, 487, 501, 608, 7545, 7713, 9430, 42879, 42913, 65351 ],
    "h": [ 293, 295, 543, 613, 7715, 7717, 7719, 7721, 7723, 7830, 9431, 11368, 11382, 65352 ],
    "hv": [ 405 ],
    "i": [ 236, 237, 238, 239, 297, 299, 301, 303, 305, 464, 521, 523, 616, 7725, 7727, 7881, 7883, 9432, 65353 ],
    "j": [ 309, 496, 585, 9433, 65354 ],
    "k": [ 311, 409, 489, 7729, 7731, 7733, 9434, 11370, 42817, 42819, 42821, 42915, 65355 ],
    "l": [ 314, 316, 318, 320, 322, 383, 410, 619, 7735, 7737, 7739, 7741, 9435, 11361, 42823, 42825, 42881, 65356 ],
    "lj": [ 457 ],
    "m": [ 623, 625, 7743, 7745, 7747, 9436, 65357 ],
    "n": [ 241, 324, 326, 328, 329, 414, 505, 626, 7749, 7751, 7753, 7755, 9437, 42897, 42917, 65358 ],
    "nj": [ 460 ],
    "o": [
        242, 243, 244, 245, 246, 248, 333, 335, 337, 417, 466, 491, 493, 511, 525, 527, 555, 557, 559, 561, 596, 629,
        7757, 7759, 7761, 7763, 7885, 7887, 7889, 7891, 7893, 7895, 7897, 7899, 7901, 7903, 7905, 7907, 9438, 42827,
        42829, 65359
    ],
    "oi": [ 419 ],
    "ou": [ 547 ],
    "oo": [ 42831 ],
    "p": [ 421, 7549, 7765, 7767, 9439, 42833, 42835, 42837, 65360 ],
    "q": [ 587, 9440, 42839, 42841, 65361 ],
    "r": [ 341, 343, 345, 529, 531, 589, 637, 7769, 7771, 7773, 7775, 9441, 42843, 42883, 42919, 65362 ],
    "s": [ 223, 347, 349, 351, 353, 537, 575, 7777, 7779, 7781, 7783, 7785, 7835, 9442, 42885, 42921, 65363 ],
    "t": [ 355, 357, 359, 429, 539, 648, 7787, 7789, 7791, 7793, 7831, 9443, 11366, 42887, 65364 ],
    "tz": [ 42793 ],
    "u": [
        249, 250, 251, 252, 361, 363, 365, 367, 369, 371, 432, 468, 470, 472, 474, 476, 533, 535, 649, 7795, 7797,
        7799, 7801, 7803, 7909, 7911, 7913, 7915, 7917, 7919, 7921, 9444, 65365
    ],
    "v": [ 651, 652, 7805, 7807, 9445, 42847, 65366 ],
    "vy": [ 42849 ],
    "w": [ 373, 7809, 7811, 7813, 7815, 7817, 7832, 9446, 11379, 65367 ],
    "x": [ 7819, 7821, 9447, 65368 ],
    "y": [ 253, 255, 375, 436, 563, 591, 7823, 7833, 7923, 7925, 7927, 7929, 7935, 9448, 65369 ],
    "z": [ 378, 380, 382, 438, 549, 576, 7825, 7827, 7829, 9449, 11372, 42851, 65370 ]
};

/** Map from diacritic to ASCII. */
const diacriticsMap = Object.keys(diacritics).reduce((map, base) => {
    for (const diacritic of diacritics[base]) {
        map.set(String.fromCharCode(diacritic), base);
    }
    return map;
}, new Map<string, string>());

/**
 * Replaces all diacritics in the given string with ASCII
 *
 * @param s  The string in which to replace all diacritics with ASCII.
 * @return The string with all diacritics replaced with ASCII.
 */
export function diacriticsToAscii(s: string): string {
    return s.split("").map(char => diacriticsMap.get(char) || char).join("");
}

/**
 * Escapes a string so it can be safely used within a regular expression.
 *
 * @param s  The string to escape.
 * @return The escaped string.
 */
export function escapeRegExp(s: string): string {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
