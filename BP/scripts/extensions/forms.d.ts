declare class ChestFormData {
	/**
	 * @param size The size of the chest. Can be 'small' or 'large'.
	 */
	constructor(size?: string);
	/**
	 * @remarks The Amount of slots in the chest ui.
	 */
	public slotCount: number;
	/**
	 * @remarks This builder method sets the title for the chest ui.
	 * @param text The title text for the chest ui.
	 */
	title(text: string): ChestFormData;
	/**
	 * @remarks Adds a button to this chest ui with an icon from a resource pack.
	 * @param slot The slot to display the item in.
	 * @param itemName The name of the item to display.
	 * @param itemDesc The item's lore to display.
	 * @param texture The type id or the path to the texture of the item or block.
	 * @param stackAmount The stack size for the item.
	 * @param enchanted If the item is enchanted or not.
	 * @param callback The callback function to run when the button is pressed.
	 */
	button(slot: number, itemName?: string, itemDesc?: string[], texture?: string, stackAmount?: number, enchanted?: boolean, callback?: (ActionFormResponse: import("@minecraft/server-ui").ActionFormResponse) => {}): ChestFormData;
	/**
	* @remarks Fills slots based off of strings and a key, with the first slot being the cordinate that the pattern starts at.
	* @param pattern The pattern to use, with characters not defined in key being left empty.
	* @param key The data to display for each character in the pattern.
	* @example
	* gui.pattern([2, 1], [
				'xxxxxxxxx',
				'x_______x',
				'x___a___x',
				'x_______x',
				'x_______x',
				'xxxxxxxxx'
		], {
			x:  { itemName: '', itemDesc: [], enchanted: false, stackAmount: 1, iconPath: 'minecraft:stained_glass_pane' },
			a:  { itemName: 'Anvil', itemDesc: [], enchanted: true, stackAmount: 1, iconPath: 'minecraft:anvil'},
		})
	*/
	pattern(pattern: string[], key: { [key: string]: { itemName?: string, itemDesc?: string[], stackSize?: number, enchanted?: boolean, iconPath: string, callback?: (ActionFormResponse: import("@minecraft/server-ui").ActionFormResponse) => any } }): ChestFormData;
	/**
	 * @param from starting position formated as [column, row]
	 * @param to ending position formated as [column, row]
	 * @param callback The callback function to run when the button is pressed.
	 * @param step The step to take when looping through the slots.
	 * @example
	 * gui.range([1, 1], [9, 3], (loopIndex, slot) => {
	 * 	gui.button(slot, 'Item Name', ['Item Description'], 'minecraft:stone', 1, false, (res) => {
	 * 		console.log('Button pressed!')
	 * 	})
	 * }, [1, 1])
	 */
	range(from: [number, number], to: [number, number], callback: (loopIndex: number, slot: number) => any, step?: [number, number]): ChestFormData;
	/**
	  * @remarks
	  * Creates and shows this modal popup form. Returns
	  * asynchronously when the player confirms or cancels the
	  * dialog.
	  *
	  * This function can't be called in read-only mode.
	  *
	  * @param player
	  * Player to show this dialog to.
	 */
	show(player: import("@minecraft/server").Player): Promise<import("@minecraft/server-ui").ActionFormResponse>;
}
export { ChestFormData };
